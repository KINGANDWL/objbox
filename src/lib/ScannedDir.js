"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedDir = void 0;
/**
 * 扫描目录
 */
class ScannedDir {
    /**
     * 递归扫描文件
     * @param dirPath 目标目录
     * @param excludeRegExp 排除的文件名称正则
     */
    constructor(dirPath, excludeRegExp) {
        this.dirPath = dirPath;
        this.excludeRegExp = excludeRegExp;
    }
    /**
     * 检测名称是否在排除正则内
     * @param fileName 被检测文件名称（不包含路径）
     */
    isExclude(fileName) {
        for (let i in this.excludeRegExp) {
            if (fileName.search(this.excludeRegExp[i]) >= 0) {
                return true;
            }
        }
        return false;
    }
}
exports.ScannedDir = ScannedDir;
