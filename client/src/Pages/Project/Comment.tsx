import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { BsExclamationCircle } from "react-icons/bs"
import { FiUpload } from "react-icons/fi"
import { IoMdSend } from "react-icons/io"
import { IoLockClosed } from "react-icons/io5"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../Components/Button"
import Image from "../../Components/Image"
import Toolt from "../../Components/Tooltip"
import AxiosRequest from "../../Utils/AxiosRequest"
import useHandleCrud from "../../Utils/HanldeCrud"

const Comment = ({ project }: any) => {

  const { user } = useSelector((state: any) => state.user)
  const [comment, setComment] = useState<string>('')
  const [getcmtid, setgetcmtid] = useState<string>('')
  const [getcomments, setgetComment] = useState<any>()

  const getComments = async () => {
    try {
      const res = await AxiosRequest.post('/comment/getcomments', { proId: project?._id })
      setgetComment(res?.data)
    } catch (error) {
      toast.error("get comments failed")
    }
  }

  const { result, isLoading, Crud } = useHandleCrud({
    url: "/comment/createcomment",
    method: "POST",
    data: { proId: project?._id, userId: user?._id, profilePic: user?.profilePic, username: user?.username, comment: comment },
    successmsg: "comment has been created",
  });

  const handlecreateCmt = async () => {
    if (!comment) return toast.error("write comment")
    await Crud()
    setComment("")
  }

  const { Crud: deletcmt, result: deletResult } = useHandleCrud({
    url: "/comment/deletecomment",
    method: "DELETE",
    data: { proId: project?._id, commentId: getcmtid },
    successmsg: "comment has been deletd",
  });

  const commentDelet = async (id: any) => {
    setgetcmtid(id)
    alert("are sure you want delete this comment")
    await deletcmt()
  }

  useEffect(() => {
    getComments()
  }, [result, deletResult])

  return (
    <div className="mt-10 w-full h-full flex flex-col gap-10">
      <div className="w-full flex items-center justify-between bg-white border-b-[1px] border-solid border-neutral-200 pb-5">
        <Toolt msg="Share" position="bottom" id="share">
          <Button bg="transparent" px="px-3" py="py-3" border="neutral-200"><FiUpload /></Button>
        </Toolt>
        <Toolt msg="Shot details" position="bottom" id="shot">
          <Button bg="transparent" px="px-3" py="py-3" border="neutral-200"><BsExclamationCircle /></Button>
        </Toolt>
      </div>

      {!project?.commentON &&
        <div className="flex gap-3 flex-col">
          <h1 className="font-bold text-2xl">Feedback</h1>
          <div className="flex flex-col gap-10 bg-neutral-100 rounded-xl h-[200px] items-center justify-center">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-400 flex items-center justify-center text-white"><IoLockClosed size={25} /></div>
            <p className="w-[50%] text-center text-neutral-400">klarthi is not looking for feedback at htis time</p>
          </div>
        </div>
      }

      <div className="comments w-full h-full flex flex-col gap-5  overflow-x-scroll">
        {getcomments?.length > 0 ?
          getcomments?.map((cmt: any) => (

            <div key={cmt._id} className="w-full flex flex-row gap-3 items-start relative">              
                <Image src={cmt.profilePic} imgclass="w-[35px] h-[35px] rounded-full" />              
              <div className="w-full">
                <Toolt msg={`${cmt.username}`} position="left" id="commentuser">
                  <Link to={`/profile/${cmt?.userId}`} className="font-bold text-md hover:opacity-50">{cmt.username}</Link>
                </Toolt>
                <p >{cmt.comment}</p>
                <span className="text-neutral-400 text-[12px]">{formatDistanceToNow(cmt?.createdAt, { addSuffix: true })}</span>
              </div>
              {user?._id === cmt?.userId &&
                <span className="absoluet top-0 right-0 font-bold cursor-pointer hover:opacity-50" onClick={() => commentDelet(cmt._id)}>x</span> 
              }
              
            </div>
          ))
          :
          "No comments yet!"
        }
      </div>

      {
        project?.commentON &&
        <div className="absolute bottom-0 left-0 w-full h-[70px] bg-white flex items-center justify-between gap-5 px-5 border-[1px] border-solid border-neutreal-200">
          <input type="text" placeholder="comment this post" className="w-full" onChange={(e) => setComment(e.target.value)} />
          <Button onClick={handlecreateCmt}>{isLoading ? "send..." : <IoMdSend />} </Button>
        </div>
      }
    </div >
  )
}

export default Comment