import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Jobs } from "../Entities/Jobs.entity";
import { Repository } from "typeorm";
import { SaveJobDTO } from "./Dto/SaveJobDto";

@Injectable()
export class JobService {

    constructor(@InjectRepository(Jobs) private jobsRepository: Repository<Jobs>){

    }

    async saveJob(saveJob: SaveJobDTO) {
        let job = new Jobs();
        job.link = saveJob.jobLink;
        let result = await this.jobsRepository.save(job);
        return result;
    }
}