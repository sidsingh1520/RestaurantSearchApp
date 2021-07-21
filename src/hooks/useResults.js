import {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState([]);
    const searchApi= async(searchTerm)=>{
        try{
        const response=await yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage("Something Went Wrong")
    }
};
//call searchapi when component is first rendered(BAD CODE)
//searchApi('Pasta');
useEffect(()=>{
    searchApi('Pasta')
},[]);
return [searchApi,results,errorMessage];

};