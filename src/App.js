import React from 'react';

import {Grid} from '@material-ui/core'
 import {SearchBar,VideoDetail,VideoList} from './component'
import youtube from './api/youtube';
import './App.css'




class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null,
    }
componentDidMount(){
    this.handleSubmit('machester united')
}    
onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
}    
    handleSubmit = async(searchTerm) =>{
        const response =await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyBQ4zJLieHY0Jb1MzkiXBToeC1LnaaiFBs',
                q:searchTerm,
            }
            
        })
        console.log(response);
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
    }
    render(){
        const {selectedVideo,videos}=this.state;
        return(
            <Grid justify='center' container spacing={10} >
                <Grid item xs={12} >
                    <Grid container spacing={10}>
                        <Grid item xs={12} >
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                            <Grid item xs={8} className='hi'   >
                                <VideoDetail  video={selectedVideo}/>

                            </Grid>
                            <Grid item xs={4} className='hii'>
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            

        )
    }
}


export default App;