import React,{useState,useEffect} from 'react'

const ClusterFbos = ({fbos,eventForm,setEventForm,selectedCluster}) => {


    const handleForm = (e) => setEventForm((prev) =>({...prev, [e.target.name]: e.target.value}));

    return (
      <div className="px-7 question-body">
        <h2 className="font-black">
        Which FBOs were involved?
        </h2>
        <div>
          {fbos
          .filter(fbo=>fbo.boroughfbo===selectedCluster.replace("Cluster", "").trim())
          .map((option) => (
            <label key={option.namefbo}>
            <input type="radio" name="fbosInvolved" value={option.namefbo} onChange={handleForm}/>
            <p>{option.namefbo}</p>
          </label>
          ))}
        </div>
      </div>
    );
}

export default ClusterFbos