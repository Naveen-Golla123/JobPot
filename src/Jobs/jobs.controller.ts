import { Body, Controller, Get, Post } from "@nestjs/common";
import { SaveJobDTO } from "./Dto/SaveJobDto"
import { JobService } from "./jobs.service";

@Controller("Jobs")
export class JobController {

    constructor(private jobService: JobService){

    }


    @Get()
    getAllJobs(){

    }

    @Post()
    saveJob(@Body() saveJobDto: SaveJobDTO) {
        console.log(saveJobDto)
        return this.jobService.saveJob(saveJobDto);
    }
}