function Card(x,y) {
    let a = [];
    for (let i of y) {
        if (i.tag == x) {
            a.push(
                <div className=" p-3 m-3 mb-5 shadow-lg rounded-3 " >
                    <a className="position-absolute" href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a>
                    <a href="#" class="lnk"><p className="h5 pb-2"> <img src={i.img} className=" w-100 mb-3" />{i.title}</p></a>
                </div>
            )
        }
    }
    return (
        <>
            {a}
        </>
    )
};
export default Card