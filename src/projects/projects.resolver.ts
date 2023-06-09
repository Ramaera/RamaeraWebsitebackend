import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';
import {  CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { PrismaService } from 'nestjs-prisma';
import { ProjectEntity } from 'src/common/decorators/project.decorator';
import { Prisma } from '@prisma/client';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService,
    private readonly prisma: PrismaService
    ) {}



  @Mutation(() => Project)
  async CreateProject(
  @ProjectEntity ()
  project:Project,
    @Args('data')
    payload: CreateProjectInput
  ) {
    try {

      const projectData =this.prisma.project.create({
          data:{...payload}
        });
      return projectData;
    } catch (err) {
      console.log(err.message)
    }
  }

  // @Mutation(() => Project)
  // async CreateDirector(
  // @ProjectEntity ()
  // project:Project,
  //   @Args('data')
  //   payload: CreateDirectorInput
  // ) {
  //   try {
  //     const directorData =this.prisma.director.create({
  //         data:{
  //             id:project.id,
  //             directorName:payload.directorName,
  //             basicIntro:payload.basicIntro,
  //         }
  //       });
  //     return directorData;
  //   } catch (err) { console.log(err.message)}
  // }


  @Query(() => [Project], { name: 'AllProjectDetails' })
  findAll() {
    return this.prisma.project.findMany({});
  }





  
//   @Mutation(() => Project)
//   async CreateProjectDataField(
//   @ProjectEntity ()
//   project:Project,
//     @Args('data')
//     payload: CreateProjectDataFieldInput
//   ) {
//     try {
//       const projectFieldData =this.prisma.projectDataFields.create({
//           data:{
//                 projectId:payload.projectId,
//                 fieldName:payload.fieldName,
//                 fieldValue:payload.fieldValue,
//           }
//         });

//       return projectFieldData;
//     } catch (err) {
//       console.log(err.message)
//     }
//   }
}
