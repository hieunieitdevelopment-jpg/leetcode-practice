/**
 * ============================================
 * 📌 1. Two Sum
 * ============================================
 * 🔗 https://leetcode.com/problems/two-sum/
 * 🏷️  Difficulty: Easy
 * 🏷️  Tags: Array, Hash Map
 * 📅 Date: 2026-03-31
 * ============================================
 *
 * 📝 Đề bài:
 * Cho mảng số nguyên `nums` và một số `target`,
 * tìm 2 phần tử trong mảng có tổng bằng `target`.
 * Trả về mảng chứa index của 2 phần tử đó.
 * Mỗi input chỉ có đúng 1 đáp án, không dùng cùng 1 phần tử 2 lần.
 *
 * 📌 Ví dụ:
 * Input:  nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Giải thích: nums[0] + nums[1] = 2 + 7 = 9 ✅
 *
 * Input:  nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 * Giải thích: nums[1] + nums[2] = 2 + 4 = 6 ✅
 */

// ============================================
// ❌ Cách 1: Brute Force — O(n²)
// ============================================
// Tư duy: thử từng cặp (i, j), nếu tổng = target → trả về
// Nhược điểm: 2 vòng for lồng nhau → chậm khi mảng lớn

var twoSumBrute = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// ============================================
// ✅ Cách 2: HashMap — O(n)
// ============================================
// Tư duy:
// - Duyệt mảng 1 lần
// - Với mỗi nums[i], tính complement = target - nums[i]
// - Kiểm tra complement đã có trong map chưa
//   + Nếu CÓ → tìm được cặp → return
//   + Nếu CHƯA → lưu nums[i] vào map để các phần tử sau tìm

/**
 * 🔍 DRY RUN (chạy tay):
 *
 * nums = [2, 7, 11, 15], target = 9
 * map = {}
 *
 * i=0: nums[0] = 2
 *      complement = 9 - 2 = 7
 *      map[7] = undefined → chưa có
 *      → lưu map = { 2: 0 }
 *
 * i=1: nums[1] = 7
 *      complement = 9 - 7 = 2
 *      map[2] = 0 ✅ TÌM THẤY!
 *      → return [0, 1]
 */

var twoSum = function (nums, target) {
    const map = {}; // { giá_trị: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Nếu complement đã tồn tại trong map → tìm được cặp
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        // Chưa tìm thấy → lưu số hiện tại vào map
        map[nums[i]] = i;
    }
};

/**
 * ============================================
 * 📊 COMPLEXITY ANALYSIS
 * ============================================
 *
 * | Cách       | Time   | Space | Giải thích                      |
 * |------------|--------|-------|---------------------------------|
 * | Brute Force| O(n²)  | O(1)  | 2 vòng for lồng nhau            |
 * | HashMap    | O(n)   | O(n)  | 1 vòng for + HashMap O(1) lookup |
 *
 * ============================================
 * 🧠 BÀI HỌC RÚT RA
 * ============================================
 *
 * 1. Khi bài yêu cầu "tìm cặp / tìm phần tử bổ sung" → nghĩ đến HashMap
 * 2. Trade-off kinh điển: dùng thêm Space O(n) để giảm Time từ O(n²) → O(n)
 * 3. Pattern "complement" (target - current) xuất hiện lại ở:
 *    - Two Sum II (sorted array → Two Pointers)
 *    - Three Sum (sort + Two Pointers)
 *    - Four Sum
 * 4. HashMap lookup O(1) là vũ khí mạnh nhất trong các bài tìm kiếm
 */
