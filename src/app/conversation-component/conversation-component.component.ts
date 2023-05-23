import { AfterViewChecked, Component, OnInit, ElementRef,ViewChild  } from '@angular/core';

@Component({
  selector: 'app-conversation-component',
  templateUrl: './conversation-component.component.html',
  styleUrls: ['./conversation-component.component.css']
})
export class ConversationComponentComponent implements OnInit,AfterViewChecked{
 // @ViewChild('chatContainer', { static: true, read: ElementRef }) chatContainer!: ElementRef;
  @ViewChild('chatContainer') chatContainer!: ElementRef;



  messages: any[] = [];
  currentIndex = 0;
  messageGap = 1000; // Time gap between messages (in milliseconds)
  typingGap = 1000; // Time gap for typing animation (in milliseconds)
  isTyping = false; // Flag to indicate if the developer is typing
  messageSound!: HTMLAudioElement; // Add the "!" operator to indicate it will be initialized
  
  constructor() {
    this.messageSound = new Audio('assets/pop-39222.mp3'); // Replace with the path to your sound file
  }
  
  ngOnInit() {
    this.simulateConversation();
  }
  // ...

  ngAfterViewChecked() {
    this.scrollChatToBottom();
  }

  

  
  
  simulateConversation() {
    setTimeout(() => {
      this.sendMessage('client', 'Hi there! I need some urgent changes to my website. Can you help me out?');
    }, 0);
    
    setTimeout(() => {
      this.startTyping();
    }, 2000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'What now? I\'m swamped with work. Spit it out quickly!');
    }, 3000);

    setTimeout(() => {
      this.startTyping();
    }, 4000);
    
    setTimeout(() => {
      this.stopTyping();
      this.sendMessage('client', 'I want a complete redesign. The current design is awful, and I need it done yesterday!');
    }, 5000);
    
    setTimeout(() => {
      this.startTyping();
    }, 6000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'You expect me to drop everything and work on it immediately? I have other clients too, you know!');
    }, 7000);
    
    setTimeout(() => {
      this.startTyping();
    }, 12000);

    setTimeout(() => {
      this.sendMessage('developer', 'Fine! I\'ll do it, but it will cost you extra. And don\'t expect miracles in such a short time!');
    }, 13000);

    setTimeout(() => {
      this.startTyping();
    }, 14000);
    
    setTimeout(() => {
      this.sendMessage('client', 'Money is not an issue. Just get it done ASAP, or I\'ll find someone else!');
    }, 15000);

    setTimeout(() => {
      this.startTyping();
    }, 16000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'You think you can threaten me? Go ahead, find someone else. Good luck!');
    }, 17000);
    
    setTimeout(() => {
      this.startTyping();
    }, 22000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'Alright, I\'ll work on it, but don\'t expect any favors. I\'ll deliver it by tomorrow, but the quality might suffer!');
    }, 23000);
    
    setTimeout(() => {
      this.startTyping();
    }, 24000);
    
    setTimeout(() => {
      this.sendMessage('client', 'Just get it done, and make sure it\'s perfect. I\'m paying you for a reason!');
    }, 25000);
    
    setTimeout(() => {
      this.startTyping();
    }, 26000);

    setTimeout(() => {
      this.sendMessage('developer', 'I\'ll do my best, but don\'t blame me if it\'s not up to your unrealistic expectations!');
    }, 27000);
    
    setTimeout(() => {
      this.startTyping();
    }, 32000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'Finally, it\'s done! Check it out, and don\'t bother me again unless you\'re willing to pay extra!');
    }, 33000);
    
    setTimeout(() => {
      this.startTyping();
    }, 34000);
    
    setTimeout(() => {
      this.sendMessage('client', 'About time! It better be flawless, or you\'ll regret it!');
    }, 35000);

    setTimeout(() => {
      this.startTyping();
    }, 36000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'I\'m done dealing with your attitude. Enjoy your mediocre website!');
    }, 37000);
    
    setTimeout(() => {
      this.startTyping();
    }, 42000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'Don\'t contact me again unless you\'re ready to show some respect. I\'m done!');
    }, 43000);
    
    setTimeout(() => {
      this.startTyping();
    }, 44000);
    
    setTimeout(() => {
      this.sendMessage('client', 'You\'re the worst developer I\'ve ever worked with. I\'ll make sure everyone knows about your incompetence!');
    }, 45000);
    
    setTimeout(() => {
      this.startTyping();
    }, 46000);
    
    setTimeout(() => {
      this.sendMessage('developer', 'Good riddance! Find someone else to deal with your ridiculous demands!');
    }, 46000);
    
  
    // setTimeout(() => {
    //   this.startTyping();
    // }, 4000);
  
    // setTimeout(() => {
    //   this.stopTyping();
    //   this.sendMessage('client', 'I want a new banner on the homepage with a dancing unicorn. Can you make that happen?');
    // }, 5000);
  
    // setTimeout(() => {
    //   this.startTyping();
    // }, 6000);
  
    // setTimeout(() => {
    //   this.sendMessage('developer', 'Of course! Dancing unicorns are my specialty. Just give me a moment.');
    // }, 7000);
  
    // setTimeout(() => {
    //   this.startTyping();
    // }, 12000);

    // setTimeout(() => {
    //   this.sendMessage('developer','Ta-da! The dancing unicorn is now live on your homepage. Refresh and see the magic!');
    // }, 13000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 14000);
  
    // setTimeout(() => {
    //   this.sendMessage('client', 'Wow, that was fast! Let me check... Oh no! The unicorn is dancing sideways. Can you fix that?');
    // }, 15000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 16000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'Oh, my apologies! Sometimes unicorns have a mind of their own. Let me get them in line.');
    // }, 17000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 22000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'Voila! The unicorn is now dancing gracefully on the homepage. Refresh and enjoy the show!');
    // }, 23000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 24000);

    // setTimeout(() => {
    //   this.sendMessage('client', 'Haha, it\'s perfect now! But wait, the unicorn is blocking some important text. Can we move it?');
    // }, 25000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 26000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'Absolutely! I\'ll play unicorn ballet and relocate it without a hitch.');
    // }, 27000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 32000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'Done! The unicorn has found its new stage. Refresh and behold the harmony!');
    // }, 33000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 34000);

    // setTimeout(() => {
    //   this.sendMessage('client', 'Fantastic! But... umm... now the unicorn is dancing too fast. Can we slow it down a bit?');
    // }, 35000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 36000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'Ah, the unicorn\'s got the moves! But let\'s calm it down. Give me a moment.');
    // }, 37000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 42000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'There you go! The unicorn is now grooving at a leisurely pace. Refresh and enjoy the mesmerizing performance!');
    // }, 43000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 44000);

    // setTimeout(() => {
    //   this.sendMessage('client', 'Haha, perfect! You\'re a wizard with unicorns! Thanks for making it happen.');
    // }, 45000);

    // setTimeout(() => {
    //   this.startTyping();
    // }, 46000);

    // setTimeout(() => {
    //   this.sendMessage('developer', 'It\'s my pleasure to bring some magical moments to your website. Remember, unicorns make everything better!');
    // }, 47000);



  }
  playMessageSound() {
    if (this.messageSound) {
      this.messageSound.addEventListener('canplaythrough', () => {
        this.messageSound?.play();
      });
      this.messageSound.load();
    }
  }
  
  
  sendMessage(sender: string, content: string) {
    this.messages.push({ sender, content });
    this.currentIndex++;
    this.playMessageSound();
  
    setTimeout(() => {
      this.scrollChatToBottom();
    }, 0);
  }
  
  scrollChatToBottom() {
    if (this.chatContainer) {
      const chatContainerEl = this.chatContainer.nativeElement;
      chatContainerEl.scrollTop = chatContainerEl.scrollHeight;
      chatContainerEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  
  
 
  startTyping() {
    this.isTyping = true;
  }
  
  stopTyping() {
    this.isTyping = false;
  }

  
  

}
