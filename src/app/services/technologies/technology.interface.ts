export interface TechDto {
    id: string,
    technologyName: string,
    technologyDisplayName: string
}

export interface TechDtoWithQuestionCount {
   technologyDto: TechDto,
   questionCount: number
}

export type TechDtoList = Array<TechDtoWithQuestionCount>
