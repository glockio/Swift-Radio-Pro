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



