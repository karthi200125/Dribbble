import { useState } from "react"

const Line3 = ({ onOpen }: any) => {

    const [open, setOpen] = useState(false)

    const click = () => {
        setOpen(!open)
        onOpen(!open)
    }

    return (
        <div className={`md:hidden ${open && "openmenu"} menu`} onClickCapture={click}>
            <div>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    )
}

export default Line3