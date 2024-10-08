// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {

  if(objA === objB)
    return true;

  
  if(typeof objA !== 'object' || typeof objB !== 'object')
    return false;

  if((objA === null || objB === null) || (objA === undefined || objB === undefined))
    return false;

  if(Array.isArray(objA) !== Array.isArray(objB))
    return false;

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);
  
  
  if(keyA.length !== keyB.length)
    return false;
  
  for (const key of keyA){
    if(objA[key] !== objB[key])
      return false;
  }

  return true;
}
