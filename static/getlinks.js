let getLinks = ( ( _d, _q ) =>{
    let naLinks = _d.querySelectorAll( _q );
    return {
        "getJson": function(){
            let aL = [];
            naLinks.forEach( ( el ) => {
                let oL = {}, eA = el.querySelector("a");
                if( eA ){
                    oL.comment = oL.name = eA.title;
                    oL.uri = eA.href;
                    oL.cat = "blogfolio";
                    aL.push( oL );
                }
            });
            console.log( aL.length );
            console.log( JSON.stringify( aL ) );
        }
    }
})( document, "main article" );
getLinks.getJson();