import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { PrismaService } from 'nestjs-prisma';
import { ProjectEntity } from 'src/common/decorators/project.decorator';

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
      const projectData =
        this.prisma.project.create({
        
          data:{
            ...payload,

          },
        });
        const projectDataFields=this.prisma.projectDataFields.create({
        
          data:{
            ...payload,
            projectId:project.id

          }
        })

      return {projectData,projectDataFields};
    } catch (err) {}
  }

  
}
