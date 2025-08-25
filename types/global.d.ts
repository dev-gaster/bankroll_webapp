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
    },
    interface UserType {
    __typename:String,
    uid: String;
    name: String;
    username?: String |null;
    image:String;
    bio:String;
    isActive:boolean;
    isAdmin:boolean;
    isStaff:boolean;
    isSuperuser:boolean
    emailVerified:boolean
}
}