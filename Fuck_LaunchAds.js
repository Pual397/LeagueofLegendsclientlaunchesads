function waitForElement(s，t){return new Promise((r，j)=>{let o=Date。当前()，n=new MutationObserver(_=>{let e=document。querySelector(s);e?(n。disconnect()，r(e)):Date。当前()-o>t&&(n。disconnect()，j(new 错误('Timeout: Element not found')));});n。observe(document。body，{childList:true，subtree:true});const e=document。querySelector(s);e&&n。disconnect()&&r(e);});}async function autoCloseAd(){const s=".info-hub__close-icon-button";try{let e=await waitForElement(s，10000);if(!e){console。warn("Close button not found within timeout");return;}e。dispatchEvent(new MouseEvent("click"，{bubbles:true}));console。log("Ad close button clicked successfully");await new Promise(r=>setTimeout(r，1000));document。querySelector(s)&&(console。log("Force removing ad container")，e。closest(".info-hub")?.remove());}catch(e){console。error("Auto close failed:"，e。message);}}export async function load(){await autoCloseAd();}
