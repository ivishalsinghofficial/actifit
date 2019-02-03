import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';


class Home extends Component {

    render() {
        return (
            <div>
            <h2>Frequently Asked Questions</h2>
              <Accordion atomic={true}>
              <AccordionItem title="What is Actifit?">
                <DummyContent1 />
              </AccordionItem>
              <AccordionItem title="Requirements">
                <DummyContent2 />
              </AccordionItem>
              <AccordionItem title="Steem Account">
                <DummyContent3 />
              </AccordionItem>
              <AccordionItem title=" AFIT Tokens & Uses">
                <DummyContent4 />
              </AccordionItem>
              <AccordionItem title="Upvotes">
                <DummyContent5 />
              </AccordionItem>

              <AccordionItem title="Reward & Rank Mechanism">
                <DummyContent6 />
              </AccordionItem>
              <AccordionItem title="Leadersboard">
                <DummyContent7 />
              </AccordionItem>
              <AccordionItem title="Delegation">
                <DummyContent8 />
              </AccordionItem>
              <AccordionItem title="Common Troubleshoots">
                <DummyContent9 />
              </AccordionItem>
              <AccordionItem title="Alternative Accounts">
                <DummyContent10 />
              </AccordionItem>
              <AccordionItem title="Actifit.io">
                <DummyContent11 />
              </AccordionItem>
              <AccordionItem title="Contact">
                <DummyContent12 />
              </AccordionItem>

              </Accordion>
            </div>
        );
    }
}
const DummyContent1 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  Actifit is an Innovative Dapp, that rewards users' activity with AFITs (tokens) and perks! The application tracks users' activity through phone-built sensors. When the users exceed the minimum of 5000 activity count, they can post an Actifit Report Card as a simple post on the steem and receive rewards such as AFIT tokens, upvotes by @actifit steem account (and potentially more rewards by other users' of the steem blockchain). The app is available for [Android](https://bit.ly/actifit-app) & [IOS](http://bit.ly/actifit-ios) users. Actifit is built on the steem blockchain. Actifit is open source and its code can be found at:

Android: https://github.com/mcfarhat/actifit
IOS: https://github.com/mcfarhat/actifit-ios
  </p>
);
const DummyContent2 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
You need a mobile phone operating with Android or IOS. You can download the app and as soon as you open it, it will instantly start tracking your activity. You will also need a steem account in order to post your activity on the steem blockchain. If you do not have a steem account, you can create one by [signing up](https://signup.steemit.com/?ref=actifit)
  </p>
);

const DummyContent3 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  You need a steem account to be able to post your activity from your mobile phone and to be rewarded.
  In addition to that, if for any reasons you do not wish to download the app and  post Actifit Report Cards, if you have Steem Power, you can be rewarded with tokens for the following actions:
  <br />
  1. Delegate SP to be rewarded with tokens on a daily basis and on a weekly basis with sbd & steem power.
   *Delegators share a max cap of 100K AFIT tokens according to their delegation amount, and also earn a 5% beneficiary reward from actifit posts' beneficiary earnings.*
   <br />
  2. Interact with actifit users by upvoting or commenting posts (that have not yet received actifit upvotes) to get some extra actifit rewards
  </p>
);

const DummyContent4 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  1. The app auto-tracks your activity within the day. Make sure to post (if you have more than the minimum 5000 steps), before midnight.
  At midnight, a new day starts and your activity count resets. A **'posting reminder'** was recently implemented in the app, so you can utilize it and make sure you do not forget to post!
  To post, you need to enter your steemit username and posting key.
(Check out here how to find your posting key https://d.tube/#!/v/raserrano/h7rze7he )
*Please keep in mind that you need a minimum of 5000 steps to get rewarded.*

After you enter the log in information (actifit does not store any of it, the information is only locally on your phone), you select your activity/ies and then after writing a short text (90 characters) describing your activity, you can click 'post' and post it on the blockchain.

When the actifit bot does its voting rounds, your post will be both upvoted, offering you Steem Rewards and you will also earn AFITs tokens to your account.
  <br />   <br />
  2. When you delegate part of your SP to the actifit account, you also get rewarded daily with tokens.
*How to calculate how many tokens you will earn*
(Your Delegated SP) * 100,000 AFIT MAX / (Actifit Account Delegated SP - without account own SP and any delegators who opted out).
Delegators share a max cap of 100K AFIT tokens according to their delegation amount, and also earn a 5% beneficiary reward from actifit posts' beneficiary earnings.

So for instance if you had delegated 100 SP, your daily earnings would be around:
100 * 100,000 / 213,000 = 46.94 AFITs
<br />   <br />
3. Upvote or Comment actifit posts
Every time that a user explores the [created](https://steemit.com/created/actifit) actifit posts and decides to upvote or comment on them, both they and the post creator get rewarded with extra tokens.
**Tip** You can exclude all other posts by visiting the website actifit.io and clicking on *activity*
<br /><br />
<center>AFIT Token USES</center>
<br />
The plans are to have Actifit tokens available for purchasing fitness related equipment, tools, gadgets, sports wear and enable transactions between providers and actifitters.
Also, when SMTs are launched,  Actifit tokens will have their own valuation against STEEM as well as FIAT currencies, and hence can be cashed out for actual FIAT currency.

Just recently the devs managed to read data from [FITBIT users](https://steemit.com/actifit/@actifit/actifit-daily-fitbit-integration-almost-ready-increased-post-upvote-wait-time-top-daily-actifitters), this is a step that is bringing wearables integrations even closer!
<br /> <br />
 Where do I see my AFIT tokens balance?<br />
1. Through the app  View Wallet - Input your steemit username without the @ and then - Check Balance
2. Through [SteemConnect](https://v2.steemconnect.com/oauth2/authorize?client_id=actifit.app&redirect_uri=https%3A%2F%2Factifit.io%2Fauth&scope=vote,comment) > visit [actifit.io](https://actifit.io/) and click on `sign in`
<br /><br />
  </p>
);

const DummyContent5 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
Maybe your activity was less than the minimum of 5000, or the bot has not reached 100% Voting Power yet.
In case the bot does not upvote a valid Actifit Report Card, it will be upvoted in next round with your current Report Card. Please wait at least 48 hours and then feel free to let the Team know on Discord.
<br /> <br />
**Please note**
 Some versions of **esteem** app still cause issues when used to edit your reports, via removing essential info Actifit uses to identify proper reports. This prevents related reports from receiving rewards. Until this issue is officially fixed via the esteem team, we advise that you use other Steem interfaces for editing, including our own actifit.io, steemit, busy or others.

  </p>
);

const DummyContent6 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  **Reward Mechanism & User Rank:** The reward mechanism so far has been solely focused on recorded activity. The new system has come to change that and to further incentivize better content quality, but also further accumulation of tokens, as well as delegation to the system. The new rank system is based on delegated SP, tokens accumulated, rewarded activity and recent activity for the last 10 days. Each user's rank will affect their rewards and combined with the new approach to evaluate actifity posts/reports will reflect how many AFIT tokens and Steem upvote each post receives.
<br /><br />
The higher the Rank the better and the more rewards you receive. User Rank is affected by 4 items: SP delegation to Actifit, AFIT tokens owned, total number of rewarded actifit posts, and number of actifit posts in the last 10 days. The more those components score higher the higher your score will be and hence your rank.

User rank itself has 30% based on delegated SP, 30% on AFIT tokens, 20% on total rewarded activity count and 20% on last 10 days activity.
<br /> <br />
In short, 25% of your post score relies on activity count (minimum 5000 activity), 25% on the user rank, 20% on engagement (upvotes and comments it receives), 20% on content, and 10% on moderation.


  </p>
);
const DummyContent7 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  The Leaderboard shows the 10 users who have managed to gather the top activity count for the day. You can check it at any time via your app, (your phone needs to be connected to internet to fetch the most current data), and you can see the list  of the top 3 if you visit the [actifi.io](https://actifit.io/#leaderboard) website and of course when following our [announcements](@actifit) you get to see our news along with the top actifitters and their rewards / activity!
<br /><br />
  Leaderboard updates every time a new entry gets in, but also once an upvote round takes place, all upvoted entries will be removed. So, an entry will show as long as it is not upvoted.
  </p>
);
const DummyContent8 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  To delegate, you can use any of the following links below<br />
  [10SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=10%20SP) <br />
   [20SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=20%20SP)<br />
    [30SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=30%20SP)<br />
     [50SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=50%20SP)<br />
      [100SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=100%20SP)<br />
       [250SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=250%20SP)<br />
        [500SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=500%20SP)<br />
         [1,000SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=1000%20SP)<br />
          [5,000SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=5000%20SP)<br />
           [10,000SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=10000%20SP)<br />
        [50,000SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=50000%20SP)<br />
         [100,000SP](https://v2.steemconnect.com/sign/delegateVestingShares?delegatee=actifit&vesting_shares=100000%20SP)<br />
          [Custom Amount](https://steembottracker.com/delegation.html?delegatee=actifit)
  Make sure you have at least 15 SP left on your account.
  </p>
);
const DummyContent9 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  I have the aggressive background tracking checked. I can open the app and check it's working and then lock the screen and it will stop after a few minutes. It doesn't stop immediately.

 You will need to check if battery saving is enabled for actifit on your phone, this could be causing the issue

 IOS trouble shooting <br /><br />

  Activity sticks to zero and does not count:- <br /><br />
 Please make sure that you have the latest version of the app. As you download the latest version, once you open the app, it should auto show you the current activity tracked for the day.
<br /><br />
General - Device Related Questions:-
<br /><br />
I updated to the newest and the app refused to open / crashes. <br /><br />
 If your telephone has a dual SIM, please make sure that your sim card 1 is set as default
 You need to go to sim card manager, and set it as default.
 If it doesn't work you might need to restart your phone.
<br /><br />
 I have a rooted device and cant get the app working. Why?<br /><br />
 Rooted phones cannot have Actifit installed unfortunately, as they pause a potential for abuse

<br /><br />
 I try to log in / post but I receive an error. What should I do?
 1. Please make sure you have the latest version of the actifit app -and-
 2. Make sure you are using the correct posting key
<br /><br />
 At any time you can also contact the Team at the [discord](https://discord.gg/aHtcA6r) for immediate support!

  </p>
);
const DummyContent10 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  We have recently implemented a new delegation beneficiary feature, targeted to help actifitters who own 2 accounts (a normal account and an alt account just for actifit). These users now can benefit as follows:
<br />
  - Transition delegation User Rank value from the main account to the alt-account. So let's say for example user john has his main account "john", which he uses to delegate to Actifit, and an actifit-specific account "acti-john" that he uses to post. Normally the account "acti-john" is not benefiting from the delegated amount to increase his User Rank. Now with the new development we made, john can decide that his acti-john account would be the one to receive the increase in User Rank.
<br />
  - Transition AFIT token delegation rewards to the alt-account. Under this setting, the user acti-john will also be the recipient of the daily delegation rewards that the user john normally receives. This will also indirectly benefit the User Rank of the example account above acti-john by accumulating more tokens, and hence the possibility to increase User Rank as well on a longer run.
    <br />
  - Transition STEEM+SBD delegation rewards to the alt-account. Similarly to option above, you can also opt in to have your STEEM/SBD weekly earnings be sent to your alt account instead of your main account.
<br />
 Is this optional or am I required to inform you? <br />
  You can opt in for one or more combination of the above. It is optional for the users.
<br />
 I wish to combine my alt accounts rewards. What should I do?
<br />
  1. Please contact one of our moderators on discord
<br />
  2. Show proof of ownership of both accounts
<br />
  3. Confirm your choice of which you options you would like enabled; option 1: User Rank Grade Beneficiary, option 2: Delegation AFIT Rewards Beneficiary, option 3: Delegation STEEM Rewards Beneficiary.
<br />
  Once confirmed, we will set this up for you in our system, and it will become active on the next delegation payout round.
  </p>
);
const DummyContent11 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  You are informed about all actifit news, activities and it can also serve as a useful tool for your *actifit curation*!
<br />
  When you visit the https://actifit.io/activity you get to see all the recent Actifit Report Cards, where you can immediately upvote, comment while you get instant information about the user ranking, posts activity count, and you can check if AFITs have already been rewarded or not.
<br />
  Your upvote weight is adjustable so you can check the percentage you wish to upvote with.
<br />
  To comment on the post, you need to click and you need to be logged in busy.org or change the busy.org to steemit.com to be able to leave your comment.
<br />
  Through the website you also get to see your wallet, your ranking and all your previous activities!
  </p>
);

const DummyContent12 = () => (
  <p style={{ padding: '18px', font: "30px" }}>
  We recommend to the users who face any app issues or who have questions to visit the Actifit official [Discord channel](https://discord.gg/aHtcA6r). Alternatively, actifit is accessible through the [official website](https://actifit.io/) via [steemit](https://steemit.com/@actifit), via email actifit.io@gmail.com
  </p>
);




export default Home;
