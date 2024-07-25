export 
enum KEYS {
  "DOTTLES_ID_LIST" = `$DOT.DOTTLES_ID_LIST`,
  "DOTTLE" = '$DOT.DOTTLE'
}

export function makeId (key : KEYS, value : any | null) : string {
  if(value === null){
    return key;
  }
  return key + ":" + value;
}
export interface Store{
  
  
}