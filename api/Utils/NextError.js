export const NextError = (err, req, res, next) => {
    const errorMessage = err.message;
    const errorStatus = err.status || 500;
    const errorStack = err.stack || "Internal Server Error";

    const errorResponse = {
        sucess: false,
        status: errorStatus,
        message: errorMessage || "Something went wrong",
        stack: errorStack,
    };

    res.status(errorStatus).json(errorResponse);
};


