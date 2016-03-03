//
//  ReactNativeView.swift
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-02-24.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//


import UIKit


class ReactNativeView: UIView {
    
    // set any data you want to pass to react in this dictionary
    var data: [String: AnyObject]?
    
    func initializeReactView() {
        
        // Configure and set any additional data to be passed to react
        // ================================================
        
        
        // Get Shared RCTBridge
        let appDelegate = UIApplication.sharedApplication().delegate as! AppDelegate
        
        if self.data == nil {
            self.data = [String: AnyObject]()
        }
        
        // this is a good place to pass configuration variables
        self.data!["DEV_MODE"]            = appDelegate.REACT_DEV_MODE
        self.data!["API_KEY"]             = "ABCDEF123456"
        self.data!["AUTHORIZATION_TOKEN"] = "a8b6de25b5bf481824c9c4173c56231a"
        
       
    
        let rootView = RCTRootView(
            bridge: appDelegate.reactNativeBridge,
            moduleName: "SwiftRadio",
            initialProperties: self.data!
        )
//        
//        let image : UIImage = UIImage(named:"background")!
//        rootView.backgroundColor = UIColor(patternImage:image)
        
          // USING LOADING VIEW
//        let image : UIImage = UIImage(named:"background")!
//        
//        let launchView = UIImageView(image: image)
//        launchView.frame = UIScreen.mainScreen().bounds
        
//        rootView.loadingView = launchView
        
        // Try Opacity false
        rootView.backgroundColor = UIColor(white:0.0, alpha:0.0)
        rootView.opaque = false
    
        rootView.frame = UIScreen.mainScreen().bounds
        
        
        
        // Grab Shared RCTROOTVIEW
        // Instantiate our root view, add as a subview, set constraints
        // ============================================================
        
//        let rootView = RCTRootView(bundleURL: jsCodeLocation,
//            moduleName: "SwiftRadio",
//            initialProperties: self.data!,
//            launchOptions: nil)
//        // Added this to get 100% of scren

//        rootView.translatesAutoresizingMaskIntoConstraints = false
        
        self.addSubview(rootView)
        
//        let views = ["rootView": rootView]
//        var constraints = NSLayoutConstraint.constraintsWithVisualFormat("V:|-0-[rootView]-0-|", options: NSLayoutFormatOptions(rawValue: 0), metrics: nil, views: views)
//        constraints += NSLayoutConstraint.constraintsWithVisualFormat("H:|-0-[rootView]-0-|", options: NSLayoutFormatOptions(rawValue: 0), metrics: nil, views: views)
//        
//        self.addConstraints(constraints)
        self.layoutIfNeeded()
    }
    
}
