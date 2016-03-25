//
//  RCTAboutViewController.m
//  SwiftRadio
//
//  Created by Gregory Laughlin on 2016-03-20.
//  Copyright © 2016 CodeMarket.io. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "SwiftRadio-Swift.h"

//
//  RCTAboutViewController.m
//  RNEmbeddedAppExample
//
//  Created by Dave Sibiski on 9/2/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTAboutViewController.h"
#import "RCTRootView.h"
#import "RCTRootView.h"
#import "Routeable.h"
#import "RNView.h"

@interface RCTAboutViewController ()

@property (weak, nonatomic) IBOutlet RNView *reactViewWrapper;

@end


@implementation RCTAboutViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    // We need a reference to the AppDelegate since that is where we stored our `RCTBridge`.
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    RCTBridge *bridge = delegate.reactNativeBridge;
    
    // Here we create a `RCTRootView` that initializes with the `RCTBridge` that we already pre-loaded.
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge  moduleName:@"SwiftRadio" initialProperties:nil];
    
    // Here we are getting access to the already instanciated `Routeable` NativeModule and then
    // setting this controller as it's `Delegate`. This will enable the Coordinator to execute methods here, without
    // being coupled to this specific class.
    
    // Look up Routeable Module, this is possible because Routeable decalred with RCTBridgeModule.h
    Routeable *routeableModule = [bridge moduleForName:@"Routeable"];
    
    // set self in routebale module to ref this class. Now when methods are called in this module they will exec using this class
    [routeableModule setDelegate:self];
    
    
    // We want this view to take up the entire screen.
    rootView.frame = [UIScreen mainScreen].bounds;
    
    // Set Background image to prevent white flash
    UIImageView *backgroundView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"background"]];
    // We want background Image to take up entire screen
    backgroundView.frame = [UIScreen mainScreen].bounds;
    // Add background image
    [self.view addSubview:backgroundView];
    
    
    // Set rootview backgroundColor to transparent so we see background image on load
    rootView.backgroundColor = [UIColor colorWithWhite:1.0 alpha:0.0];
    

    // Here is where we pass down our data that will be a `prop` in the `PassingData` component.
    //    rootView.initialProperties = [self data];
    
    // Each `ViewController` comes with it's own "base" view, here we just want to add our `RCTRootView`
    // to that "base" view so that it is visible on the screen.
    [self.view addSubview:rootView];
    
}

-(void)popRoute {
     [self.navigationController popToRootViewControllerAnimated:NO];
}

// Hide Nav Bar
-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES animated:animated]; //it hides

}

-(void)viewWillDisappear:(BOOL)animated{
    [super viewWillDisappear:animated];
    [self.navigationController setNavigationBarHidden:NO animated:animated]; // it shows
}

// Set status bar color back to white
// http://stackoverflow.com/questions/30429421/ios8-change-status-bar-color-without-using-uinavigationbar
- (UIStatusBarStyle)preferredStatusBarStyle {
    return UIStatusBarStyleLightContent;
}
@end