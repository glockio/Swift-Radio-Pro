Notes:

1. Init RCTBRidge on load and share that with multiple modules
2. Layout wtf autoconstraints
3. Background image flicker:
    - RN render image, white flicker
       - turned off dev mode, bit better
       - xcode product> Scheam - Release, better
       - INIT RCTBridge On load, better
       -- Stil white flicker
    - Have UIView background color be black, image was black
      - It was acceptable
    - OR have UIView render the background image and RN render the content. MUAHAH feels native to me

4. Navigation Navigation
   - DAS Fuk how do I get I pop out of RN back to Native app?
   - Subnavigation?
      - Should I use Navigator, Navigator IOS?
      - Did some reading... they are going by bye use NavigatorExpermnetal

  - What about hybird nav? IOS handels all routing logic and RN renders views and revieces props.

5. Codepush. Was smooth sailing.

6. Sooner or later you have to write some Obj-C


- Native App


RCTRootView, where your React Native app lives.

|----------|   |-RCT_ROOT_VIEW-|
|          |   |               |
| NATIVE   |   |    RNUIVIEW   |  <- Where RNAPP LIVES
|----------|   |----------------
           Bridge
 -----------------------------

RCTRootView says where to load JS from, we store this in AppDelgate
 From There RCTRootView adds a subview
 ViewController -> Initializes RNView


https://www.youtube.com/watch?v=hDviGU-57lU
 * Bridge calls are asyc, you can do other useful work rather than wating around.
 . The calls are also batched.
 . WOuld be an issue if Native OBjcs ref JS objects and vise versa. SO Calls are async batched seralizeable messages. This is what makes up the bridge

 - UI updates happen on main native thread. When updates need to occur UIManager addes a message to the messageQ which is scheduled on the main thread. This happens automatically for you using the render method.

 After all Commands exec Layout kicks in

 Flow For touch: All events routed through JS

 -------------------------------
                             7. Update UI
Naitve 1. Touch Event        6.Process Payload

 -------------------------------

Bridge 2. Seralized Payload   5. Searlized Response

 --------------------------------

 JS  3. JS Processes Event  ->  4. calls 0-n native methods ^

 -------------------------------


Fast Why:

If js ends up calling several native functions, they are batched
* Everything else can run on diff thread, and use more cPU cores


The Bridge: Flexiable

* Normally it uses Inter process commucation (IPC)
* Can store and run JS in another process, FOr debugger run JS in WebKit Process
* THe bridge could be webseockets that u send messages through, this is how the react debugger works.


-> Because of this This guy streamed his application via websockets. JS hosted with node accepted messages with websockets and responded with native ui calls.


- Use Moudles for JS -> Native commuincation
- Use Events for Native -> JS  commuincation


// Obj C

// creates getters and setters. Bridge is defined as a property in RCTViewManager.h
@synthesize bridge = _bridge;


SPY:  MESSAGE QUEUE

-> Slow rendering of my initial component. I think its because in componentWillMount I am making a call but all calls are batched.