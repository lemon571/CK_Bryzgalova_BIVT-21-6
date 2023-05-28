import { ArgumentsHost, BadRequestException, ExceptionFilter } from '@nestjs/common';
export declare class BadRequestExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost): void;
}
