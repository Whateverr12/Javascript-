/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/



// create a variable to hold your NFT's
let NFTs=0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, uniqueness)  {
    let nftdata = {
        name: name,
        description: description,
        uniqueness: uniqueness
    };
    NFTs++;
    return nftdata;
}



// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (nfts) {
    nfts.forEach(nftdata => {
        console.log("Name: " + nftdata.name);
        console.log("Description: " + nftdata.description);
        console.log("uniqueness: " + nftdata.uniqueness);
        console.log("----");
    });
}



// print the total number of NFTs we have minted to the console
function getTotalSupply() {

        console.log("Total number of NFTs minted: " + NFTs);
    }


// call your functions below this line
let myNFTs = [];
myNFTs.push(mintNFT("NFT_1", "Description for NFT_1", " most Common"));
myNFTs.push(mintNFT("NFT_2", "Description for NFT_2", "unique"));

listNFTs(myNFTs);
getTotalSupply();
