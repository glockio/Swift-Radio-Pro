
//  ReactNativeAboutViewController.swift
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-02-24.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

//
//  RNAboutViewController
//

import UIKit

class ReactNativeAboutViewController: UIViewController {
    

    @IBOutlet weak var reactView: ReactNativeView!
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        self.title = "React Wrapper (Swift)"
        self.reactView.data = [
            "content": "Welcome to React Native"
        ]
        self.reactView.initializeReactView()
    }
    
}
