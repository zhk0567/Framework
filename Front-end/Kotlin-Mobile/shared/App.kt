// 将本文件内容合并到 KMP 工程的 shared/commonMain 源集中（包名按你的模块调整）。
// 依赖：org.jetbrains.compose.* 与 androidx 对应 BOM 由模板工程已声明。

package com.framework.showcase

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun ShowcaseApp() {
    val count = remember { mutableStateOf(0) }
    val draft = remember { mutableStateOf("") }
    val items = remember { mutableStateListOf("示例项") }

    MaterialTheme {
        Surface(modifier = Modifier.padding(16.dp)) {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text(
                    text = "Kotlin Multiplatform Mobile · 能力展台（Compose Multiplatform）",
                    style = MaterialTheme.typography.titleLarge,
                )
                Text(
                    text = "状态与列表逻辑可放在 commonMain；平台壳由各端入口调用本 Composable。",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(text = "计数：${count.value}", style = MaterialTheme.typography.bodyLarge)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Button(onClick = { count.value++ }) { Text("+1") }
                }
                OutlinedTextField(
                    value = draft.value,
                    onValueChange = { draft.value = it },
                    label = { Text("新条目") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = true,
                )
                OutlinedButton(
                    onClick = {
                        val t = draft.value.trim()
                        if (t.isNotEmpty()) {
                            items.add(0, t)
                            draft.value = ""
                        }
                    },
                ) {
                    Text("添加")
                }
                LazyColumn(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    itemsIndexed(items) { _, item ->
                        Text(text = item, modifier = Modifier.padding(vertical = 4.dp))
                    }
                }
            }
        }
    }
}
