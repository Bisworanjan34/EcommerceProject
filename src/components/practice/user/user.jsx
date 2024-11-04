import React, { useState } from 'react'
import getdata from '../../axios/service/apidata'
const user = () => {
    let [user, setUser] = useState([])
    let [filterdata, setFilter] = useState([])

    let showdata = () => {
        getdata(setUser, setFilter)
    }
   let  filterfun=(e)=>{
        if(e.target.value=='all'){
            setUser(filterdata)
        }
        else if(e.target.value=='male'){
            let malefilter=filterdata.filter((f)=>{
                return f.gender=='male'
            })
            setUser(malefilter)
        }
        else if(e.target.value=='female'){
            let femalefilter=filterdata.filter((f)=>{
                return f.gender=='female'
            })
            setUser(femalefilter)
        }
   }

    return (
        <div>
            <h1>user component-with some data</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam voluptatibus iure dolores voluptatem tenetur impedit. Vero error incidunt quam eius eum cumque impedit, asperiores hic quis dolore veniam. Labore minus nihil suscipit ipsa voluptates quaerat illo odio. Repellendus quia distinctio adipisci neque aut illo perspiciatis ut, harum aperiam hic, provident debitis nostrum tempore, placeat suscipit assumenda accusantium architecto molestiae? Libero enim quo</p>
            <button className='bg-warning' onClick={showdata}>showdata</button>
            All<input type="radio" name='gender'  value='all' onClick={filterfun} defaultChecked/>
            male<input type="radio" name='gender'  value='male' onClick={filterfun}/>
            female<input type="radio" name='gender'value='female'  onClick={filterfun} />
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr' }}>
                {
                    user.map((val) => {
                        return (
                            <div className='border p-2 bg-dark text-light mb-2'>
                                <img src={val.picture.medium} alt="" width={'100px'} />
                                <p>name:{val.name.first}</p>
                                <p>gender:{val.gender}</p>
                                <p>email:{val.email}</p>
                                <p>city:{val.location.city}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default user
