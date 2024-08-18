interface IPerson {
    id: number;
    name: string;
}
 
const jsonParser:React.FC<IPerson> = () => {
    let p: IPerson = JSON.parse('{ "id": 101, "name": "Tom" }');
    return p;
}

export default jsonParser;