import { IsOptional,IsArray,IsString } from 'class-validator';

export class CreateCrawlDto {
  @IsString()
  public pageUrl: string;

  @IsString()
  public pageTitle: string;

  @IsString()
  public pageDescription: string;

  @IsOptional()
  @IsArray()
  public pageHeadings: Array<String>;

}
