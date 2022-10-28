import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@Controller('crawler')
@ApiTags('CardInformation')
export class CrawlerController {}
