export default interface EnhancedError {
  message: string;
  code?: string;
  errno?: string;
  syscall?: string;
  address?: string;
  port?: number;
  response?: {
    status: number;
    data: object | string;
  };
}
