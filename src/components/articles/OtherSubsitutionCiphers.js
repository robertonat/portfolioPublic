import { Link } from 'react-router-dom';
import "./article.css";
import SideNavigation from '../views/SideNavigation';
import PigPen from '../images/Pigpen_cipher_key.svg.png'
import LetterFrequency from '../images/LetterFrequency.png'
const OtherSubsitutionCiphers = (props) => {
    document.title = "Substitution cipher cont."
    let OtherSubsitutionCiphersView = () => {
        return (
            <html lang="en">
                <head>
                    <link rel="article" href="article.css"></link>
                    <meta charset="UTF-8"></meta>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>Substitution ciphers cont.</title>
                </head>
                <SideNavigation />
                <body>
                    <h1>Substitution ciphers Cont.</h1>

                    <div class="artpar">While Caesar/Vigenère Ciphers are interesting and well known subsitution ciphers, there are more that can be explored. The former are based on shifting the character a certain number of values from their original
                        place on the alphabet. Vigenère cipher follows this in principal, even though there is no shift value being explicitly given, the shift value is based on the value of the corresponding keywords letter. Lets look at some that approach encryption in a different way.
                    </div>

                    <br></br>
                    <h2>PigPen Cipher</h2>
                    <div class="artpar">PigPen Cipher is a subsitution cipher where letters arent subsituted with other alphabetic letters, rather they are subsituted with symbols. These symbols would either have to be known by their recipient,
                        or a key would have to be avaliable to them to allow for decrypting. </div>

                    <h4>Here is what the PigPen symbols looks like:</h4>

                    <img src={PigPen} height="400px" width="400px" alt="" />
                    <br></br><br></br>

                    <div class="artpar">To decipher the ciphertext, the recipient would have to take each symbol one by one and turn them back into their corresponding alphabetic counterpart.
                        <br /><br />
                        Unfortunately PigPen Cipher suffers from its own popularity and the readiness of information in modern times. Since this translation table is readily avaliable to anyone who is familiar with PigPen, its security is next to none. It would only detain those who know nothing of pigpen, or would not want to put the effort
                        in decrypting it. While its professional use is limited, PigPen is still a fun activity to do with a friend and most likely will trick the common person.
                        <br></br>
                        <br></br>

                        <b>Try this: </b>
                        <i>Make your own variation of PigPen. While default PigPen translation tables are readily avaliable, you can make your own with symbols only you and your close friends know. Keep it secret, and whoever sees your message will have to do a lot of manual work to brute force the solution</i>
                    </div>

                    <br></br><br></br>
                    
                    <h2>Are subsitution ciphers in use today?</h2>


                    <div class="artpar">To put it plainly, these types of ciphers are not in serious use today. They can be used if potential onlookers are expected to have next to no knowledge or exprience with encrypting. However they should not
                        be used in a potentially dangerous setting. No company or large organization should consider using subsitution ciphers in storing any sensitive data. These ciphers are relatively easy to brute force, especially with the aid of a computer program.
                        <br></br><br></br>
                        For example, Caesar Cipher, in particular in its base implementation, can be brute forced by simply shifting the encrypted message one shift at a time. Out of those 25 results, one should be expected to be a coherent and correct message.
                        To take it a step further, there are patterns in any language that can be observed in written form. Certain letters will appear more often than others. Lets look at an example. 
                        <br></br><br></br>
                        <b>Lets say we intercepted this message and know that it is using Caesar Cipher.</b>    </div>
                    <br></br><br></br>
                    <div class="example">
                        <div class="line"><code>Plaintext: ???</code></div>
                        <div class="line"><code>Shift: ?</code></div>
                        <div class="line"><code>Ciphertext: Naj gjjs rjfsnsl yt yfqp yt dtz ktw xtrj ynrj stb</code></div>
                    </div>
                    <br></br><br></br>
                    <div class="artpar">Of course the cipher text as it is is meaningless to us. We could just write down all 25 possible shifts on paper and that would be enough. We can even write a program to automate this task. But we also know that we can do better.
                    <b>Lets look closely at the text.</b>
                    <br></br><br></br>
                    We can see that in the cipher text, <b>J</b> appears very frequently. Since certain letters tend to appear more often than others in the english language, we can prioritize those letters more than others to attempt 
                    to decyrpt the message faster.</div>
                    <br></br>
                    <img src={LetterFrequency} height="400px" width="400px" alt="" />
                    <p>Graph of letter frequency. <a href="https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html">source</a></p>
                    <div class="artpar">Looking at the graph of letter frequency, we can see that the top 5 frequent letters are <b>e,t,a,o,i</b>. Instead of brute forcing 25 different results, we can try out these 5 and see what comes out of them.
                    If the text is still not decrypted at that point, we can simply continue down the list of frequently found letters. To do this, we simply look at how many shifts itd take to turn J into the respective letter we want to investigate.</div>
                    <br></br><br></br>
                    <div class="example">
                        <div class="line">E :  <code>Shift = 21, result "Ive been meaning to talk to you for some time now"</code></div>
                        <div class="line">T :  <code>Shift = 10, result "Xkt qttc btpcxcv id ipaz id ndj udg hdbt ixbt cdl"</code></div>
                        <div class="line">A :  <code>Shift = 17, result "Era xaaj iawjejc pk pwhg pk ukq bkn okia peia jks"</code></div>
                        <div class="line">O :  <code>Shift = 5, result "Sfo loox wokxsxq dy dkvu dy iye pyb cywo dswo xyg</code></div>
                        <div class="line">I :  <code>Shift = 25, result "Mzi fiir qiermrk xs xepo xs csy jsv wsqi xmqi rsa"</code></div>
                    </div>
                    <br></br><br></br>
                    <div class="artpar">Incredibly we found the correct answer on the first attempt. This may not always be the case, as there will be messages that do not have E as its most frequent letter. However this does demonstrate the power of analysis. 
                    Instead of brute forcing from A-Z the results, simply recongizing patterns in language or messages can help point to what is most likely going to be the correct outcome. This similiar process can be repeated with the other subsitution cipher. 
                    <br></br><br></br>
                    While subsitution ciphers can be a fun and relatively simple way to protect your information, stick to the side of caution. Use it to play games with your friends or to have keep low security information from random passerbyers, but do not rely on it to securely protect your vital information</div>
                </body>
                <strong><Link to={"/Signup"}>Create an account</Link> or <Link to={"/Login"}>Log in</Link> to test your knowledge of subsitution ciphers with this quiz</strong>
            </html>
        )
    }
    return (
        <div>
            {OtherSubsitutionCiphersView()}
            <Link to={'/'} >
                Home Page
            </Link>
            <br />
            <br />
        </div>
    )
}
export default OtherSubsitutionCiphers;
