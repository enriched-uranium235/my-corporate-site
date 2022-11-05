<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models\Staff;

class StaffController extends Controller
{
    // 従業員情報を取得するコントローラー
    public function index() {
        try {
            $list = Staff::get();
            $response['data'] = $list;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function create(Request $request) {
        try {
            if ($request->image!=null){
                $image_path = $request->file('image')->store('public/pdf');
                $create = new Staff();
                $create->name = $request->name;
                $create->position = $request->position;
                $create->age = $request->age;
                $create->content = $request->content;
                $create->image = basename($image_path);
                $create->save();
            } else {
                $create = new Staff();
                $create->name = $request->name;
                $create->position = $request->position;
                $create->age = $request->age;
                $create->content = $request->content;
                $create->save();
            }

            $response['message'] = '情報が新規に保存されました。';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function get($id) {
        try {
            $data = Staff::find($id);

            if ($data){
                $response['data'] = $data;
                $response['message'] = '読み取り成功';
                $response['success'] = true;
            } else {
                $response['message'] = 'データがありません';
                $response['success'] = false;
            }
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
    }

    public function update($id) {
        try {
            if ($request->image!=null){
                $image_path = $request->file('image')->store('public/pdf');
                $update = Staff::find($id);
                $update->name = $request->name;
                $update->position = $request->position;
                $update->age = $request->age;
                $update->content = $request->content;
                $update->image = basename($image_path);
                $update->save();
            } else {
                $update = Staff::find($id);
                $update->name = $request->name;
                $update->position = $request->position;
                $update->age = $request->age;
                $update->content = $request->content;
                $update->save();
            }

            $response['message'] = '情報が新規に保存されました。';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function delete($id) {
        try {
            $delete = Staff::find($id);

            if ($delete) {
                $delete->delete();
                $response['message'] = '消去完了';
                $response['success'] = true;
            } else {
                $response['message'] = 'データがありません';
                $response['success'] = false;
            }
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
    }
}
