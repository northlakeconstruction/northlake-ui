
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID ?? ""
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY ?? ""
const AWS_REGION = process.env.AWS_REGION ?? ""
const NEW_LEAD_TOPIC_ARN = process.env.NEW_LEAD_TOPIC_ARN ?? ""

export default {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
    NEW_LEAD_TOPIC_ARN,
}