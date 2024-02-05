function spillinfo(){
    tom();
    document.getElementById('spillned').innerHTML= /*HTML*/`
    
    <div class="innercard">
        Hei her er noen av mine spill jeg liker og spille
        <ul>
            <li>
                Online spill
                <ul>
                    <li>War thunder</li>
                    <li>Red dead redemption 2</li>
                    <li>Rocket legue</li>
                    <li>Valorant</li>
                    <li>League of legends</li>
                </ul>
                <li>Offline spill</li>
                <ul>
                    <li>Red dead redemption 2</li>
                    <li>Grand Theft Auto V</li>
                    <li>Star wars Jedi: Survivor</li>
                </ul>
            </li> <button class="close" onclick="lukk('spillned')">x</button>
        </ul>

    </div>
        `
    }
     function musikkinfo(){
                tom();
                document.getElementById('musikkned').innerHTML= /*HTML*/`

                <div class="innercard" >
                    
                    Hei her er noen av mine Spotify playlister
                    <ul>
                        <li>Playlist</li>
                            <ul>
                                <li><a href="https://open.spotify.com/playlist/4zZ3JfXB4eX7apX5yFbsvQ?si=bb6ee18a60d2425b"> Svensk Rap</a></li>
                                <li><a href="https://open.spotify.com/playlist/45vK7sV0JohgkqqxKlSWJv?si=cab70c0315364ab6"> Ant Wan</a></li>
                                <li><a href="https://open.spotify.com/playlist/62Luy8cKLpaW5L07DcNwq6?si=60873c03c68e4a07&pt=837c3edc5665c3f4ec2aab9568e8b1ad"> Livet/alle mine sanger</a></li>
                                <li><a href="https://open.spotify.com/playlist/221M8BoLor1ca5tkk9y1XB?si=406edc4dbef54fb2&pt=c982ffa0413002470fb34b828a9e44f2"> Rap</a></li>
                            </ul>
                                <button class="close" onclick="lukk('musikkned')">x</button>
                 </div>
                                    `
            }
            function tom(){
                document.getElementById('spillned').innerHTML='';
                document.getElementById('musikkned').innerHTML='';
            }
            function lukk(idname){
                document.getElementById(idname).innerHTML='';
            }