export default (Api)=>{
    const getListFile = async()=>{
      return await Api.post('api/dataFromSAP/getListZTP')
    }
    const getAllSearch = async()=>{
      return await Api.post('api/dataFromSAP/getDtlAllList')
    }
    const getListFileDetail = async(ztpHeadId)=>{
      return await Api.post('api/dataFromSAP/getDetailByHdr',{ztpHeadId})
    }  
      const getListFileHeader = async(ztpHeadId)=>{
      return await Api.post('api/dataFromSAP/getHdrById',{ztpHeadId})
    }

    
    return {
        getListFile,
        getListFileDetail,
        getListFileHeader,
        getAllSearch
    }
}

