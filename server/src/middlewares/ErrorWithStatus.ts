class ErrorWithStatus extends Error {
  code: number;
  success: boolean;

  constructor(message: string, code: number, success: boolean = false) {
    super(message);
    this.success = success;
    this.code = code;
  }
}

export default ErrorWithStatus;
