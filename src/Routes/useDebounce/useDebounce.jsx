function useDebounce(cb, dealy=2000){
    let timeid;
    return(...arg)=> {
        clearTimeout(timeid)
        timeid = setTimeout(()=>{
           cb(...arg)
        }, dealy)
    }
}
export default useDebounce;