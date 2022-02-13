export default class ErrorHandler extends Error {
    constructor(
        public statusCode: number,
        public errorCode: string,
        public errorMessage: string
    ) {
        super();
    }
}