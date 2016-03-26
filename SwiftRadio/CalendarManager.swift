//
//  CalendarManager.swift
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-16.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

import Foundation
// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: NSObject {
    
    @objc func addEvent(name: String, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
        print(name)
        print("TESTIN")
        if( name != "") {
            resolve("IT WORKD")
        }
        // Date is ready to use!
    }
    
}