const { ethereum } = window;
let crypt = new JSEncrypt({'default_key_size': 2048});

if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  ethereum.request({ method: 'eth_accounts' }).then(getAccount).catch(console.error);
}

const ethereumButton = document.querySelector('.enableEthereumButton');
ethereumButton.addEventListener('click', () => {
  getAccount();
});


const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner()
const abi = [{"inputs": [{"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_title", "type": "string"}, {"internalType": "string", "name": "_thumb_url", "type": "string"}, {"internalType": "string", "name": "_misc", "type": "string"}, {"internalType": "bool", "name": "_rdy", "type": "bool"} ], "name": "add_movie", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_answer_index", "type": "uint96"}, {"internalType": "string", "name": "_encrypted_answer", "type": "string"} ], "name": "answer", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_public_key", "type": "string"} ], "name": "ask_movie", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "payable", "type": "function"}, {"inputs": [], "name": "purge_movies", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "purge_pending_ask", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "string", "name": "_new_contract_version", "type": "string"} ], "name": "update_contract_version", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_index", "type": "uint96"}, {"internalType": "uint96", "name": "_movie_id", "type": "uint96"}, {"internalType": "string", "name": "_title", "type": "string"}, {"internalType": "string", "name": "_thumb_url", "type": "string"}, {"internalType": "string", "name": "_misc", "type": "string"}, {"internalType": "bool", "name": "_rdy", "type": "bool"} ], "name": "update_movie", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bool", "name": "_online", "type": "bool"} ], "name": "update_online", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_admin_address", "type": "address"} ], "name": "update_owner", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "_price", "type": "uint256"} ], "name": "update_price", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "admin_address", "outputs": [{"internalType": "address", "name": "", "type": "address"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "name": "AskList", "outputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "uint256", "name": "ask_date", "type": "uint256"}, {"internalType": "string", "name": "public_key", "type": "string"}, {"internalType": "string", "name": "encrypted_answer", "type": "string"}, {"internalType": "uint256", "name": "answer_date", "type": "uint256"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "AskListIndex", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "bank", "outputs": [{"internalType": "address payable", "name": "", "type": "address"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "Current_price", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "get_ask_list", "outputs": [{"components": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "uint256", "name": "ask_date", "type": "uint256"}, {"internalType": "string", "name": "public_key", "type": "string"}, {"internalType": "string", "name": "encrypted_answer", "type": "string"}, {"internalType": "uint256", "name": "answer_date", "type": "uint256"} ], "internalType": "struct PolyStream.Ask[]", "name": "", "type": "tuple[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "_cursor", "type": "uint96"} ], "name": "get_library", "outputs": [{"components": [{"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "string", "name": "title", "type": "string"}, {"internalType": "string", "name": "thumb_url", "type": "string"}, {"internalType": "string", "name": "misc", "type": "string"}, {"internalType": "bool", "name": "rdy", "type": "bool"} ], "internalType": "struct PolyStream.Movie[]", "name": "", "type": "tuple[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "get_pending_ask", "outputs": [{"internalType": "uint96[]", "name": "", "type": "uint96[]"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "name": "MovieList", "outputs": [{"internalType": "uint96", "name": "movie_id", "type": "uint96"}, {"internalType": "string", "name": "title", "type": "string"}, {"internalType": "string", "name": "thumb_url", "type": "string"}, {"internalType": "string", "name": "misc", "type": "string"}, {"internalType": "bool", "name": "rdy", "type": "bool"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "MovieListIndex", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "new_contract_version", "outputs": [{"internalType": "string", "name": "", "type": "string"} ], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "Online", "outputs": [{"internalType": "bool", "name": "", "type": "bool"} ], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"} ], "name": "Pending_ask", "outputs": [{"internalType": "uint96", "name": "", "type": "uint96"} ], "stateMutability": "view", "type": "function"} ]
const polystream = new ethers.Contract('0xfaC8D1213a5e7b80C407e9D4dd3A8E75DDdf639E', abi, signer);

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];
  ethereumButton.innerHTML = account;
  $('#alert_need_metamask').remove()
  getMovieList(1)
}

async function getMovieList(_index) {
  
  let movieListIndex = await polystream.MovieListIndex();
  let movies = await polystream.get_library(_index);

  for(i in movies) {
    if(movies[i][4] == true) {
      $('#movieList').append(`<div class="col">
                                <div class="thumb_vid" data-movie-title='`+movies[i][1]+`' data-movie-id=`+movies[i][0].toString()+` style="background:url(`+movies[i][2]+`);background-size: cover;background-repeat: no-repeat;background-position: center center;">
                                  <i class="bi bi-play-fill play_btn"></i>
                                  <div class="title">`+movies[i][1]+`</div>
                                </div>
                              </div>`)
    }
  }

  if((_index+50) < parseInt(movieListIndex.toString())) {
    console.log('Load next : ' + (_index+50))
    getMovieList((_index+50))
  } else {
    console.log('All movies loaded')
  }
}

$(document).on("click", '.thumb_vid', async function(event) {

  let movie_id = $(this).attr('data-movie-id');
  let movie_title = $(this).attr('data-movie-title');

  try {

    let result = await new swal({
      title: 'Do you confirm the purchase ?',
      text: 'Pay 0.10$ to watch the movie : ' + movie_title,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: `Cancel`,
    }); 
    
    if(result.isConfirmed) {
      Swal.fire('Waiting metamask payment..', '', 'info')
      let tx = await polystream.connect(signer).ask_movie(movie_id, localStorage.getItem("publicKey"), { value: "118621429198427550" });
      receipt = await tx.wait();
      if (receipt.status) {
        let txn_test = await provider.getTransaction(receipt.transactionHash);
        if (txn_test) {
          $('.swal2-container').remove()
          let timerInterval
          Swal.fire({
            title: 'Your film is coming...',
            html: 'Don\'t close this page',
            timer: 60*1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
        }
      } else {
        console.log('error')
      }

      
    } 
  } catch(e){
    $('.swal2-container').remove()
    Swal.fire('Payment fail!', '', 'error')
    console.error(e);
  }
});

$(document).on("click", '#close_player', async function(event) {
  $('#player').html('');
  $('#player').hide();
});

setInterval(async function () {
  let askList = await polystream.get_ask_list();
  for(i in askList) {
    if(askList[i][0].toLowerCase() == account) {
      if(localStorage.getItem(askList[i][5].toString()) == null) {
        if(askList[i]['encrypted_answer'] != "") {
          let decrypted_answer = crypt.decrypt(askList[i]['encrypted_answer']);
          localStorage.setItem(askList[i][5].toString(), decrypted_answer);
          $('#player').html('<div id="close_player"><i class="bi bi-x-circle-fill"></i></i></div><iframe src="'+decrypted_answer+'&autoplay=false&preload=false" loading="lazy" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>')
          $('#player').show();
          $('.swal2-container').remove()
        }
      }
    }
  }
}, 5000);

if(localStorage.getItem("publicKey") == null) {
  localStorage.setItem("publicKey", crypt.getPublicKey());
  localStorage.setItem("privateKey", crypt.getPrivateKey());
} else {
  crypt.setPrivateKey(localStorage.getItem("privateKey"));
}