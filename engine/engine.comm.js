/**
 * CommunicationsHandler
 * 
 * Maintains connection with server, constantly updateing its gamestate
 * 
 * @function	public		initialize              -	Initializes the communications with APE-server
 */
var CommunicationsHandler = new Class({
    ape: null,
    initialize: function(){
        this.ape = new APE.Client();
    }
}
