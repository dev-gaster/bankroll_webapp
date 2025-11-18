export { }
declare global {
    interface CampaignType {
        title: string
        description: string
        image: string
        created_at: string
        updated_at: string
        goal_amount: string
        end_date?: string | undefined
        campaignId: string
        organizer_name: string
        percentage_raised: number | 0
        member_count: number | 0
        donation_count: number | 0
        author_avatar?: string|undefined


    };
    interface UserType {
        __typename: string,
        uid: string;
        name: string;
        username?: string | null;
        avatar: string;
        bio: string;
        isActive: boolean;
        isAdmin: boolean;
        isStaff: boolean;
        isSuperuser: boolean
        emailVerified: boolean
        campaigns: CampaignType[] | null
    }
}