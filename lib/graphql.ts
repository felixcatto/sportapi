import { gql } from 'graphql-request';

const videostandEventFields = gql`
  fragment videostandEventFields on VideostandEvent {
    title
    is_main
    dt_start
    dt_end
    dt_create
  }
`;

export const videostandEvents = gql`
  query videostandEvents($videostand_id: ID!) {
    videostandEvents(videostand_id: $videostand_id) {
      current_and_upcoming {
        ...videostandEventFields
      }
      finished {
        ...videostandEventFields
      }
    }
  }
  ${videostandEventFields}
`;
