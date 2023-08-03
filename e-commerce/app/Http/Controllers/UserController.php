<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Site_user;
use App\Models\User_address;

class UserController extends Controller
{
    public function listUsers(){
        $users = Site_user::all();
        return $users;
    }

    public function addUser(Request $request){

        $user = Site_user();
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        // return response()->json(['message' => 'User added successfully']);
    }

    public function listUserById(Request $request){
        $user = Site_user::latest('id')->first();
        return $user;
    }


    public function addUserAddress(Request $request){
        $user = new User_address();
        $user->postal_code = $request->postal_code;
        $user->country = $request->country;
        $user->company = $request->company;
        $user->address = $request->address;
        $user->apt = $request->apt;
        $user->state = $request->state;
        
        $user->save();

        return response()->json(['message' => 'User address added successfully']);
    }

    public function listLastestId(){
        $user = User_address::latest('id')->first();
        return $user;
    }
}
