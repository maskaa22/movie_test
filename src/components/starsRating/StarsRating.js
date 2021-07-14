

export default function StarsRating({count, value,
                        inactiveColor='#ddd',
                        size=24,
                        activeColor='#f00', onChange}) {

    const list=[];
    // const val=2;
    let random = Math.random();
    const key = 'key'
    let parse = JSON.parse(localStorage.getItem(key));

    const stars=[1,2,3,4,5]
    const handleChange = (value) => {
        onChange(value + 1);

    }
    return (
        <div>
            {
                stars.map((s, index) =>
                {
                    let style = inactiveColor;
                    if (index < value)
                    {
                        style=activeColor;
                    } else parse=style
                    return (
                        <span className={"star"}
                              key={index}
                              style={{color: style, width:size, height:size, fontSize: size}}
                              onClick={()=> {
                                  handleChange(index)
                                  list.push({id:random, val:index});
                                  localStorage.setItem(key, JSON.stringify(list));
                              }
                              }>🟊</span>
                    )
                }
            )}

        </div>
    )
}