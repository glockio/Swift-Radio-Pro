//
//  RNAboutViewController.swift
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-02-24.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

//
//  RNAboutViewController
//

import UIKit

class RNAboutViewController: UIViewController {
    
    @IBOutlet weak var reactViewWrapper: ReactNativeView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "React Wrapper (Swift)"
        self.reactViewWrapper.data = [
            "content": "Welcome to React Native"
        ]
        self.reactViewWrapper.initializeReactView()
    }
    
}