export {}
declare global {
    interface CampaignType {
        title: string
        description: string
        image:string
        created_at: string
        updated_at :string
        goal_amount: string
        end_date?:string|undefined
    }
}