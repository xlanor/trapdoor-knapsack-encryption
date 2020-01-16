import { axios } from '../axios';
import Header from '../header';
import common from '../common';
import mapIndex from '../pageIndexMapper';

const GET_QUESTION_URL='questions/';

export const getQuestions = async(currentTab, succ, fail) => {
    const apiHeader = Header()
    .contentType('application/json')
    .build();
    
    let urlIndex = mapIndex(currentTab);
    try{
        const res = await axios({
            headers: apiHeader,
            method: 'get',
            url: `${GET_QUESTION_URL}${urlIndex}/`
        });
        succ(res.data);
    }catch(err){
        fail({
            other: err.message,
        });
    }
}