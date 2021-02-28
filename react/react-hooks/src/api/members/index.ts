import { members } from './mockData';
import { MemberEntity } from "../../model";
const fetchMembers = () :MemberEntity[] => {
    // return Promise.resolve(members);
    return members
}
const fetchMembersAsync = () => {

}

export const memberAPI = {
    fetchMembers,
    fetchMembersAsync
}