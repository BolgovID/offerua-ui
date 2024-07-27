export interface TopicDto {
    id: string,
    topicName: string,
    displayName: string
}

export interface TopicDtoWithQuestionCount {
   topicDto: TopicDto,
   questionCount: number
}

export type TopicDtoList = Array<TopicDtoWithQuestionCount>
